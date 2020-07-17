import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

// 工作目錄路徑加入 postFiles folder
const pathDirectory = path.join(process.cwd(),'postFiles');

// 取得按日期排序的貼文資料
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

// 取得所有檔案的 id
export function getAllPostIds() {
    // 取得目錄中的所有檔案
    const fileNames = fs.readdirSync(pathDirectory);
    // 如果是要 fetch API，在這邊 fetch
    // 檔名去掉 .md 後，再放入 params 中
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/,'')
            }
        }
    });
}

// 取得所有檔案的內容
export async function getPostData(id) {
    const fullPath = path.join(pathDirectory, `${id}.md`);
    const fullContents = fs.readFileSync(fullPath, 'utf8');
    const matterResults = matter(fullContents);

    // turn md files into html string
    const processedContent = await remark()
    .use(html)
    .process(matterResults.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResults.data
    }
}