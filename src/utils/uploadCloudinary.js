const uploadImageToCloudinary = async (file) => {
  const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
  const cloud_name = import.meta.env.VITE_CLOUD_NAME;
  const fd = new FormData();
  fd.append("file", file);
  fd.append("upload_preset", upload_preset);
  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
    method: "POST",
    body: fd,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || "Upload failed");
  return data;
};
export default uploadImageToCloudinary;
