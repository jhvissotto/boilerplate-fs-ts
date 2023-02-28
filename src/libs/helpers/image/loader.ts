// prettier-ignore
export async function loader({ 
    imgSrc, 
    onLoadCallback, 
    onErrorFallback, 
    width,
    height, 
}) {
    
    return await new Promise((resolve, reject) => {
        
        const img = new Image(width, height)

        img.onload = data => {
            onLoadCallback?.(data)
            resolve(data)
        }

        img.onerror = error => {
            onErrorFallback?.(error)
            reject(error)
        }
        
        img.src = imgSrc
    })
    
}
