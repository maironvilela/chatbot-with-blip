import { ContactProps } from "../../../domain/models/contact"
import { Flex, Card, Box, Avatar, Text } from "@radix-ui/themes";

type CardContactProps = ContactProps;


export function CardContact({ name, email, imageUrl }: CardContactProps) {
    const defaultImageUrl = 'https://cdn-icons-png.flaticon.com/128/924/924915.png'
    const newImageUrl = imageUrl ? imageUrl : defaultImageUrl

    return (
        <Box width="250px" >
            <Card>
                <Flex gap="3" align="center">
                    <Avatar
                        size="3"
                        src={newImageUrl}
                        radius="full"
                        fallback="T"
                    />
                    <Box>
                        <Text as="div" size="2" weight="bold">
                            {name}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {email}
                        </Text>
                    </Box>
                </Flex>
            </Card>
        </Box >

    )
}
