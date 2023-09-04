import multer from "multer"
import path from 'path';

const storage = multer.diskStorage({
    destination: function (request, file, cb){
        cb(null, path.resolve('uploads'));
    },
    filename: function (request, file, cb){
        cb(null, `${Date.now()}-${file.originalname.toLocaleLowerCase()}`);
    },
});

const upload = multer({ 
    storage: storage,
    fileFilter: function(request, file, cb){
        extensionCheck(file, cb);
    }
 });

 function extensionCheck(file: Express.Multer.File, cb:  multer.FileFilterCallback){
    
  const filetypes = /jpeg|jpg|png|gif/;
  
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null, true);
  } else {
    return cb(null, false);
  }
 };

export default upload;