import { Router } from "express";
import fileUpload from "express-fileupload";
import path from "path";

const filesRoutes = Router();

filesRoutes.post("/", fileUpload(), async (req, res, next) => {
  try {
    // Ensure there are files
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(422).json({ error: "No files submitted" });
    }

    // Pick out the file
    const file = req.files.profile_image;
    // Determine the upload path (full path)
    const fullUploadPath =
      path.join(__dirname, "../", "public", "avatars") + "/" + file.name;

    file.mv(fullUploadPath, (err) => {
      if (err) {
        return next(err);
      }

      res.send("/avatars/" + file.name);
    });
  } catch (error) {
    next(error);
  }
});

export default filesRoutes;
