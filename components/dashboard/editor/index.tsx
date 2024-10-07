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

interface RichTextEditorProps<T extends string | string[]> {
  initialContent: T;
  onUpdate: (newContent: T) => void;
  isList?: boolean;
}

function RichTextEditor<T extends string | string[]>({
  initialContent,
  onUpdate,
  isList = true,
}: RichTextEditorProps<T>) {
  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    if (isList && Array.isArray(initialContent)) {
      const listItems = initialContent
        .map((item) => `<li>${item}</li>`)
        .join("");
      setEditorContent(`<ul>${listItems}</ul>`);
    } else {
      setEditorContent(initialContent as string);
    }
  }, [initialContent, isList]);

  const handleContentChange = (event: ContentEditableEvent) => {
    let newContent = event.target.value;

    if (isList) {
      // Ensure content is always wrapped in a <ul> tag for lists
      if (!newContent.trim().startsWith("<ul>")) {
        newContent = `<ul>${newContent}</ul>`;
      }

      // Ensure each line is a list item
      newContent = newContent.replace(/<ul>([^]*?)<\/ul>/g, (match, p1) => {
        const items = p1
          .split(/<\/li>\s*<li>|<br\s*\/?>/g)
          .map((item: string) => item.trim())
          .filter((item: string) => item !== "")
          .map((item: string) => item.replace(/^<li>|<\/li>$/g, ""))
          .map((item: string) => `<li>${item}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      });

      setEditorContent(newContent);

      const updatedContent =
        newContent
          .match(/<li>(.*?)<\/li>/g)
          ?.map((item) => item.replace(/<\/?li>/g, "")) || [];
      onUpdate(updatedContent as T);
    } else {
      setEditorContent(newContent);
      onUpdate(newContent as T);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (isList && event.key === "Enter") {
      event.preventDefault();
      document.execCommand("insertHTML", false, "</li><li><br></li>");
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
