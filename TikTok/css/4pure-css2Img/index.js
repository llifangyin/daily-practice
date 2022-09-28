const fileDom = document.querySelector('input[type=file]')
const btn = document.querySelector('button')

function loadImage() {
    const file = fileDom.files[0]
    console.log(file,'loadImage');
    if(!file){
        return null
    }
    const objUrl = URL.createObjectURL(file)
    //blob:http://127.0.0.1:5500/f5febeea-8ab9-4c2f-9818-44a783178ecb
    const img = new Image()
    return new Promise((resolve,reject)=>{
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            resolve(null)
        }
        img.src = objUrl
    })
}

function createHtml(width,height,bmp) {
    const shadowCSSFragments = []
    const shadowCSSHover = []
    // 读取每个像素点
    for(let r = 0 ; r < height; r++){
        for(let c = 0;c < width; c++){
            const i = r * width  + c
            const R = bmp[i * 4],
            G = bmp[i * 4 + 1],
            B = bmp[i * 4 + 2],
            A = bmp[i * 4 + 3] / 255;
            shadowCSSFragments.push(`${c + 1}px ${r}px rgba(${R},${G},${B},${A})`)
            shadowCSSHover.push(`${c + 1}px ${r}px rgba(${255-R},${255-G},${255-B},${A})`)

        }
    }
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width= , initial-scale=1.0">
            <title>Document</title>
            <style>
                .shadow-img{
                    width:${width}px;
                    height:${height}px
                }
                .shadow-img .inner{
                    width:1px;
                    height:1px;
                    box-shadow:${shadowCSSFragments.join(',')};
                    transition:1.5s ease-in-out;
                }
                .shadow-img:hover .inner{
                    box-shadow:${shadowCSSHover.join(',')}
                }
            </style>
        </head>
        <body>
            <div class='shadow-img'>
                <div class='inner'></div>
            </div>
        </body>
    </html>
    `
}

function donwload(html) {
    var blob = new Blob([html],{type:"text/html"})
    var url = window.URL.createObjectURL(blob)
    var a = document.createElement('a')
    a.href = url
    a.style.display= 'none'
    a.download = 'demo.html'
    a.click()
}

async function  generate() {
    const img = await loadImage() //得到图片对象
    console.log(img);
    if(!img){return}
    // 把图片用canvas绘制
    const cvs = document.createElement('canvas')
    cvs.width = img.width
    cvs.height = img.height
    const ctx = cvs.getContext('2d')
    ctx.drawImage(img,0,0)

    // 获取canvas中的位图
    const bmp = ctx.getImageData(0,0,img.width,img.height).data
    const html = createHtml(img.width,img.height,bmp)

    donwload(html)


}


btn.onclick = generate