import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css"; // 에디터 스타일 적용
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"; // 다크모드 적용 플러그인
import colorSyntax from "@toast-ui/editor-plugin-color-syntax"; // 글자색 변경 플러그인
import "tui-color-picker/dist/tui-color-picker.css"; // 글자색 변경 플러그인
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css"; // 글자색 변경 플러그인
import Button from "react-bootstrap/Button";
import { useState } from "react";

function PostWrite() {
  const [isSaving, setIsSaving] = useState(false);
  const onSave = () => {
    setIsSaving(!isSaving);
  };
  return (
    <div>
      <Editor
        height="500px"
        previewStyle="vertical"
        theme="dark"
        plugins={[colorSyntax]}
        initialValue="Please write post here"
      />
      <Button variant="success" className="mt-3" onClick={onSave}>
        {!isSaving ? "저장하기" : "저장 중.."}
      </Button>
    </div>
  );
}

export default PostWrite;
