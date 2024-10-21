
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
        <div className={`flex flex-col gap-2 p-4  `} >
            <div className={`flex gap-2 text-center items-center    ${direction === 'sent' ? " " : " ml-auto"}`}>
                <img className=" h-10 rounded-full" src={avatarUrl} alt="" />

                <div className={`flex justify-between gap-2   w-96 p-4 rounded-xl ${direction === 'sent' ? " bg-gray-100" : "bg-green-100  "}`}>
                    <p className="flex-1 text-justify p-2">{content}</p>
                    <time className=" text-gray-400 flex items-end "
                        title={formattedDate}
                        dateTime={new Date(messageDateText).toISOString()}
                    >
                        {relativeDate}
                    </time>
                </div>

            </div>
        </div >
    )
}