

type MessageImageProps = {
    direction: 'sent' | 'received'
    content: {
        uri: string,
        text: string
    };
    formattedDate: string
    relativeDate: string
    messageDateText: string
    avatarUrl: string


}

export function MessageImage({ direction, content, avatarUrl, formattedDate, messageDateText, relativeDate }: MessageImageProps) {

    return (
        <div className={`flex flex-col gap-2 w-2/3 ${direction === 'sent' ? "" : "ml-auto"}`}  >
            <div className="flex gap-2">
                <img className="w-10 h-10 rounded-full" src={avatarUrl} />
                <div>
                    <img src={content.uri} />
                    <span>{content.text}</span>
                </div>
                <time className="w-30 text-gray-400 flex items-end"
                    title={formattedDate}
                    dateTime={new Date(messageDateText).toISOString()}
                >
                    {relativeDate}
                </time>
            </div>

        </div>
    )

}