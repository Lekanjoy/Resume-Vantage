import React, { useState } from "react";
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
  BtnUndo
} from "react-simple-wysiwyg";

function RichTextEditor() {
  const [value, setValue] = useState('defaultValue');


  return (
    <div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <Separator/>
            <BtnBulletList />
            <BtnNumberedList />
            <Separator/>
            {/* <BtnStrikeThrough /> */}
            <BtnUndo/>
            <BtnRedo/>
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
