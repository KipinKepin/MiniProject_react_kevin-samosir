import OpenAI from 'openai'
import fs from 'fs'
import multer from 'multer'

const openai = new OpenAI({
    apiKey: "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"
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../frontend/src/hasilUpload')
    },
    filename: (req, file, cb) => {
        console.log("file : ", file);
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const upload = multer({ storage: storage }).single('file')
let filePath;

export const generateNew = async (req, res) => {
    try {
        const response = await openai.images.generate({
            prompt: req.body.message,
            n: 1
        });

        console.log(response);
        res.send(response.data);
    }
    catch (error) {
        console.error(error);
    }
}

export const uploadImage = (req, res) => {
    upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err);
        } else if (err) {
            return res.status(500).json(err);
        }
        console.log(req.file.path);
        filePath = req.file.path; // Set the file path here
        res.status(200).json({ message: 'File uploaded successfully' });

    });
};

export const generateVariations = async (req, res) => {
    try {
        const response = await openai.images.createVariation({
            image: fs.createReadStream(filePath),
            n: 1
        });
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error generating variations' });
    }
}
