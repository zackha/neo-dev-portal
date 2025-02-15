import React from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
export default function Contribute() {
    return (
        <Layout>
            <div className="twcontainer  mx-auto max-w-6xl px-4 lg:px-0 pt-20">
                <div className="flex items-center mb-12">
                    <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 13L22 7L16 1" stroke="#10E6A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 1L1 7L7 13" stroke="#10E6A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="text-2xl font-semibold ml-3">How to Contribute</span>
                </div>
                <img src="/contribute/header.png" />

                <div className="mt-12 flex flex-col gap-4">
                    <p>1. Create a new directory in <code>tutorials</code> directory using this format   <code>YYYY-MM-DD-your-tutorial-title</code>
                        <p className="">YYYY-MM-DD is the date of your tutorial. Tutorials are sort by date in descending order.</p>
                    </p>
                    <p>2. Create <code>index.md</code> inside the directory.</p>
                    <p>3. If your tutorial contains images, you can create a new directory at same level as the <code>index.md</code> file and put your images in there so you can refer to them in your markdown file like the following   <code>![img](assets/walletconnect-diagram.png)</code></p>
                    <p>4. In your <code>index.md</code> you can use following front-matter tags. Frontmatter must be in the very first line of your Markdown file.</p>
                    <pre className="language-markdown whitespace-pre-wrap">
                        <p>---</p>
                        <p>title: 'An Introduction to Contract Development on Neo'</p>
                        <p>description: "Short description of your tutorials. A few lines is ideal. We have a line clamp css to limit it to onlye 3 lines"</p>
                        <p>author: CoZ.io</p>
                        <p>tags: ["BEGINNER", "NEONJS", "NEOEXPRESS","BOA","SMART CONTRACT"]</p>
                        <p>sidebar: true</p>
                        <p>skill: BEGINNER</p>
                        <p>image: https://yourdomain.com/image.png</p>
                        <p>---</p>
                    </pre>
                </div>
            </div>
        </Layout>
    )
}