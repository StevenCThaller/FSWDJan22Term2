import FileUploader from "components/FileUploader";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "./AvatarPicker.scss";

const AvatarPicker = ({ imgs, selected, setSelected }) => {
  const [customAvatarPath, setCustomAvatarPath] = useState();

  console.log(customAvatarPath);

  const selectCustomAvatar = (path) => {
    setCustomAvatarPath(path);
    setSelected(path);
    console.log(path);
  };

  return (
    <div className="avatar-picker">
      {imgs.map((img) => (
        <img
          key={img}
          className={`selectable-avatar ${
            selected.includes(img) ? "selected" : ""
          }`}
          onClick={() => setSelected(`/${img}`)}
          src={`/${img}`}
          alt={img}
        />
      ))}
      {customAvatarPath && (
        <img
          className={`selectable-avatar ${
            selected.includes(customAvatarPath) ? "selected" : ""
          }`}
          onClick={() => setSelected(customAvatarPath)}
          src={customAvatarPath}
          alt="Custom upload"
        />
      )}
      <FileUploader selectCustomAvatar={selectCustomAvatar} />
    </div>
  );
};

export default AvatarPicker;
