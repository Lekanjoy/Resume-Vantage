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
import stars from "@/public/assets/dashboard/stars.svg";
import Image from "next/image";
import { useTypedSelector, useAppDispatch } from "@/store/store";
import { updateExperience } from "@/features/resumeSlice";

function RichTextEditor() {
  const dispatch = useAppDispatch();
  const experiences = useTypedSelector((state) => state.resume.experience);
  const currentEditingIndex = useTypedSelector((state) => state.resume.currentEditingIndex);

  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    if (currentEditingIndex !== null && experiences[currentEditingIndex]) {
      const description = experiences[currentEditingIndex].description?.map(item => `<li>${item}</li>`)
        .join('');
      setEditorContent(`<ul>${description}</ul>`);
    }
  }, [currentEditingIndex, experiences]);

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

    if (currentEditingIndex !== null) {
      const updatedExperience = {
        ...experiences[currentEditingIndex],
        description: newContent.match(/<li>(.*?)<\/li>/g)?.map(item => item.replace(/<\/?li>/g, '')) || []
      };
      dispatch(updateExperience({ experience: updatedExperience }));
    }
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
