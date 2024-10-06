import React, { useEffect, useState } from "react";
import {
  BtnBold,
  BtnItalic,
  BtnUnderline,
  Editor,
  EditorProvider,
  Toolbar,
  BtnRedo,
  BtnUndo,
  ContentEditableEvent,
} from "react-simple-wysiwyg";
import Image from "next/image";
import stars from "@/public/assets/dashboard/stars.svg";

interface RichTextEditorProps {
  initialContent: string[];
  onUpdate: (newContent: string[]) => void;
}

function RichTextEditor({ initialContent, onUpdate }: RichTextEditorProps) {
  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    const listItems = initialContent?.map(item => `<li>${item}</li>`).join('');
    setEditorContent(`<ul>${listItems}</ul>`);
  }, [initialContent]);

  const handleContentChange = (event: ContentEditableEvent) => {
    let newContent = event.target.value;
    
    // Ensure content is always wrapped in a <ul> tag
    if (!newContent.trim().startsWith('<ul>')) {
      newContent = `<ul>${newContent}</ul>`;
    }

    // Ensure each line is a list item
    newContent = newContent.replace(/<ul>([^]*?)<\/ul>/g, (match, p1) => {
      const items = p1.split(/<\/li>\s*<li>|<br\s*\/?>/g)
        .map((item: string) => item.trim())
        .filter((item: string) => item !== '')
        .map((item: string) => item.replace(/^<li>|<\/li>$/g, ''))
        .map((item: string) => `<li>${item}</li>`)
        .join('');
      return `<ul>${items}</ul>`;
    });

    setEditorContent(newContent);

    const updatedContent = newContent.match(/<li>(.*?)<\/li>/g)?.map(item => item.replace(/<\/?li>/g, '')) || [];
    onUpdate(updatedContent);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.execCommand('insertHTML', false, '</li><li><br></li>');
    }
  };

  return (
    <EditorProvider>
      <Editor 
        value={editorContent} 
        onChange={handleContentChange} 
        onKeyDown={handleKeyDown}
      >
        <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnUndo />
          <BtnRedo />
          <div className="bg-[#FAFAFA] border border-[#BDBDBD] p-2 rounded-md cursor-pointer ml-auto">
            <Image
              src={stars}
              alt="AI Icon"
              className="w-4 h-4 lg:w-full lg:h-full"
            />
          </div>
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
}

export default RichTextEditor;
