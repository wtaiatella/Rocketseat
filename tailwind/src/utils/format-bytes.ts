export function formatBytes(fileSizeInBytes: number): string {
  const kilobyte = 1024
  const megabyte = kilobyte * 1024

  if (fileSizeInBytes < kilobyte) {
    return fileSizeInBytes + ' B'
  } else if (fileSizeInBytes < megabyte) {
    return (fileSizeInBytes / kilobyte).toFixed(1) + ' kB'
  } else {
    return (fileSizeInBytes / megabyte).toFixed(1) + ' MB'
  }
}
