const fs = require('fs');
const path = require('node:path');

const deleteFolderRecursive = (dir) => {
	if (fs.existsSync(dir)) {
		fs.readdirSync(dir).forEach((file) => {
			const curDir = path.join(dir, file);
			if (fs.lstatSync(curDir).isDirectory()) {
				deleteFolderRecursive(curDir);
			} else {
				fs.unlinkSync(curDir);
			}
		})
		fs.rmdirSync(dir);
	}
}

const folder = process.argv.slice(2)[0]

if (folder) {
	deleteFolderRecursive(path.join(__dirname, '../dist', folder));
} else {
	deleteFolderRecursive(path.join(__dirname, '../dist/cjs'));
	deleteFolderRecursive(path.join(__dirname, '../dist/esm'));
	deleteFolderRecursive(path.join(__dirname, '../dist/umd'));
	deleteFolderRecursive(path.join(__dirname, '../dist/types'));
}
