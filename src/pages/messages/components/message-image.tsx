type MessageImageProps = {
    direction: 'sent' | 'received'
    content: {
        uri: string,
        text: string
    };
    formattedDate: string
    relativeDate: string
    messageDateText: string

}

export function MessageImage({ direction, content }: MessageImageProps) {
    return (
        <div className={`flex flex-col gap-2 w-2/3 ${direction === 'sent' ? "" : "ml-auto"}`}  >

            <div className="flex gap-2">
                <img className="w-10 h-10 rounded-full" src={`/public/assets/images/${direction}.jpg`} />
                <div>
                    <img src={content.uri} />
                    <span>{content.text}</span>
                </div>
            </div>
        </div>
    )

}