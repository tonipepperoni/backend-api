import { FileUpload } from "../../prisma";

export interface AccountInfo {
  id: string
  email: string
  username: string | null
  createdAt: Date
  avatar?: FileUpload | null,
}
