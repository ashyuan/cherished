
require('dotenv').config()

export const CLOUD_NAME = process.env.CLOUD_NAME || 'cloud-name'
export const API_KEY = process.env.API_KEY || 'api-key'
export const API_SECRET = process.env.API_SECRET || 'secret-key'
export const UPLOAD_PRESET = process.env.UPLOAD_PRESET || 'upload-preset'