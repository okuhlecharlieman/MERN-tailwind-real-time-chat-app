import { useState } from "react";

function InputTest() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*, video/*"
        onChange={handleFileChange}
      />
      {selectedFile && (
        <div>
          <p>Selected File:</p>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>File Size: {selectedFile.size} bytes</p>
          <p>
            Last Modified: {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
          {/* You can add an image or video player here based on the file type */}
          {selectedFile.type.startsWith("image/") && (
            <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
          )}
          {selectedFile.type.startsWith("video/") && (
            <video controls>
              <source
                src={URL.createObjectURL(selectedFile)}
                type={selectedFile.type}
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
}

export default InputTest;
