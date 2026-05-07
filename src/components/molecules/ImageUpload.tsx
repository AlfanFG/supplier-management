import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);
	});

interface ImageUploadProps { isMultiple?: boolean }

const ImageUpload: React.FC<ImageUploadProps> = ({ isMultiple = false }) => {
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState("");
	const [fileList, setFileList] = useState<UploadFile[]>([]);

	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj as FileType);
		}

		setPreviewImage(file.url || (file.preview as string));
		setPreviewOpen(true);
	};

	const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
		setFileList(newFileList);

	const uploadButton = (
		<button style={{ border: 0, background: "none" }} type="button">
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</button>
	);
	return (
		<>
			<Upload
				action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
				listType="picture-circle"
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
				multiple={isMultiple}
			>
				{fileList.length >= 8
					? null
					: !isMultiple && fileList.length < 1
						? uploadButton
						: null}
			</Upload>
			{previewImage && (
				<Image
					styles={{ root: { display: "none" } }}
					preview={{
						open: previewOpen,
						onOpenChange: (visible) => setPreviewOpen(visible),
						afterOpenChange: (visible) => !visible && setPreviewImage(""),
					}}
					src={previewImage}
				/>
			)}
		</>
	);
};

export default ImageUpload;
