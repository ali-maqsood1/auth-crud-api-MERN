import express from "express";
import authController from "../controllers/authController.js";
import { identifier } from "../middlewares/identification.js";
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/signout', identifier, authController.signout);


router.patch('/send-verification-code', identifier, authController.sendVerificationCode);
router.patch('/verify-verification-code', identifier, authController.verifyVerificationCode);
router.patch('/change-password', identifier, authController.changePassword);

router.patch('/send-forgot-password-code', authController.sendForgotPasswordCode);
router.patch('/verify-forgot-password-code', authController.verifyForgotPasswordCode);

export default router;