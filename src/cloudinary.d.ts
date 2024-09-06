
type Cloudinary = {
    openUploadWidget: (
      options: {
        cloudName: string;
        uploadPreset: string;
        multiple?: boolean;
        sources?: string[];
        showAdvancedOptions?: boolean;
      },
      callback: (error: any, result: any) => void
    ) => void;
  };
  
  declare global {
    interface Window {
      cloudinary: Cloudinary;
    }
  }
  