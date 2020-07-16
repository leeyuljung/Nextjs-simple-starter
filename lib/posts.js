import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 工作目錄路徑加入 postFiles folder
const pathDirectory = path.join(process.cwd(),'postFiles');

export function getSortedPostsData() {
    // 取得 /postFiles 裡面所有 files
    const fileNames = fs.readdirSync(pathDirectory);
    const AllPostsData = fileNames.map(fileName => {
        // 把 fileName 去掉 .md 設成 id
        const id = fileName.replace(/\.md$/,"");
        
        // 取得完整檔案路徑
        const fullPath = path.join(pathDirectory, fileName);
        // 以 string 讀取檔案
        const fullContents = fs.readFileSync(fullPath, 'utf8');

        const matterResults = matter(fullContents);
        // 結合 id 跟 metadata obj
        return {
            id,
            ... matterResults.data
        }
    });

    // 以日期排序
    return AllPostsData.sort((a, b) => {
        if(a.date < b.date){
            return 1;
        } else {
            return -1;
        }
    });
}