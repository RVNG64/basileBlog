import React, { useEffect, useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface CKeditorProps {
  onChange: (data: string) => void;
  value: string;
}

export default function MyCKEditor({onChange,value}: CKeditorProps) {
  const [isClient, setIsClient] = useState(false);

  console.log("Props dans MyCKEditor", {onChange,value,});
  console.log('Je suis un composant React');

  useEffect(() => {
    setIsClient(true); // Ce code ne sera exécuté que côté client
  }, []);

  return (
    <div>
      {isClient && (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      )}
    </div>
  );
}
