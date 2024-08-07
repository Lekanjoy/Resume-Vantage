import React, { useEffect, useRef, useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  Editor,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar,
  BtnRedo,
  BtnUndo,
  createButton,
  ContentEditableEvent,
} from "react-simple-wysiwyg";
import stars from "@/public/assets/dashboard/stars.svg";
import Image from "next/image";
import { selectedResult } from "../describe-experience";

function RichTextEditor({
  selectedResults,
}: {
  selectedResults: selectedResult[];
}) {
  const [editorContent, setEditorContent] = useState("");
  const prevSelectedResultsRef = useRef<selectedResult[]>([]);

  useEffect(() => {
    const newResults = selectedResults.filter(
      (result) =>
        !prevSelectedResultsRef.current.some(
          (prevResult) => prevResult.id === result.id
        )
    );

    if (newResults.length > 0) {
      setEditorContent((prevContent) => {
        const newItems = newResults.map((result) => `<li>${result.text}</li>`);
        const newContent = prevContent
          ? `${prevContent}\n${newItems.join("\n")}`
          : `<ul>\n${newItems.join("\n")}\n</ul>`;
        return newContent;
      });
    } else {
      // Handle removal of results
      const removedResults = prevSelectedResultsRef.current.filter(
        (prevResult) =>
          !selectedResults.some((result) => result.id === prevResult.id)
      );

      if (removedResults.length > 0) {
        setEditorContent((prevContent) => {
          let newContent = prevContent;
          removedResults.forEach((result) => {
            // Remove the <li> element containing the result
            newContent = newContent
              .replace(`<li>${result.text}</li>\n`, "")
              .replace(`<li>${result.text}</li>`, "")
              .trim();
          });
          // Remove empty <ul> tags if all items are removed
          newContent = newContent.replace(/<ul>\s*<\/ul>/g, "");
          return newContent;
        });
      }
    }
    prevSelectedResultsRef.current = selectedResults;
  }, [selectedResults]);

  const handleContentChange = (event: ContentEditableEvent) => {
    setEditorContent(event.target.value);
  };

  return (
    <EditorProvider>
      <Editor value={editorContent} onChange={handleContentChange}>
        <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnBulletList />
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
