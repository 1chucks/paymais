import axios from "axios";

import { TERMII_SMS_API_URL } from "./constants";
import { SendSmsInterface } from "./interface";

export class TermiiService {
	async sendSms(payload: { to: string; sms: string }) {
		try {
			const resp = await axios.post(`${TERMII_SMS_API_URL}/send`, {
				...payload,
				api_key: process.env.TERMII_API_KEY,
			});
		} catch (error: any) {
			throw error.response.data.message;
		}
	}

	async sendBulkSms(payload: SendSmsInterface) {
		try {
			return await axios.post(`${TERMII_SMS_API_URL}/send/bulk`, {
				...payload,
				api_key: process.env.TERMII_API_KEY,
			});
		} catch (error) {
			throw error;
		}
	}
}
