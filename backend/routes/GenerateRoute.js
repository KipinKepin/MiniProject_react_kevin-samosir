import express from "express"
import {
    generateNew, generateVariations, uploadImage
} from "../controllers/Generate.js"

const router = express();

router.post('/generate/images', generateNew);
router.post('/generate/upload', uploadImage);
router.post('/generate/variations', generateVariations);

export default router;