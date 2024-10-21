
type MessageProps = {
    direction: 'sent' | 'received'
    content: any;
    formattedDate: string
    relativeDate: string
    messageDateText: string
    avatarUrl: string
}

export function MessageText({ direction, content, formattedDate, messageDateText, relativeDate, avatarUrl }: MessageProps) {
    return (
        <div className={`flex flex-col gap-2 p-4  w-2/3 rounded-xl ${direction === 'sent' ? " bg-gray-100" : "bg-green-100 ml-auto "}`} >
            <div className="flex text-center justify-between ">
                <div className="flex gap-2 items-center text-left w-3/4">
                    <img className="w-10 h-10 rounded-full" src={avatarUrl} alt="" />
                    <p className="text-justify">{content}</p>
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