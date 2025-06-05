/*import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
//import upload from "../middlewares/multer.js";
import { singleUpload } from "../middlewares/mutler.js";
import { analyzeResume } from "../controllers/resume.Analyzer.Controller.js";

const router = express.Router();

// Resume upload and analysis route
router.route("/analyze").post(isAuthenticated, singleUpload, analyzeResume);

export default router;*/


import express from 'express';
//import { analyzeResume } from '../controllers/resumeAnalyzerController.js';
import {analyzeResume} from '../controllers/resume.Analyzer.Controller.js'
//import { singleUpload } from '../middlewares/multer.js';
//import isAuthenticated from '../middlewares/isAuthenticated.js';
import { singleUpload } from "../middlewares/mutler.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route('/analyze').post(isAuthenticated, singleUpload, analyzeResume) ;
/*
const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
 */
export default router;
