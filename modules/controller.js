import captureWebsite from 'capture-website';
import mime from 'mime';
import fs from 'fs';

export const getImage = async (url = 'https://github.com/LuigiImVector/scrnsht/', res) => {
    const imagePath = './tmp/screenshot.png';

    if (fs.existsSync(imagePath)) {
        fs.unlink(imagePath, (err => {
            if (err) console.log(err);
            else {
                console.log(`\nDeleted file: ${imagePath}`);
            }
        }));
    }

    await captureWebsite.file(url, imagePath, {
        width: 1920,
        height: 1080
    });

    res.writeHead(200, { 'content-type': mime.getType(imagePath) });
    fs.createReadStream(imagePath).pipe(res);
};
