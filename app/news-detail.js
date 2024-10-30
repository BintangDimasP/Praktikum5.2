import { Heading, Text, Image, Box } from "@gluestack-ui/themed";
import { Header } from "../components";
import { ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();

  return (
    <>
      <Header title="News" withBack={true} />
      <ScrollView flex={1}>
        <Box>
          <Image
            source={{ uri: params.image }}
            w="100%"
            h="20%"
            alt="Image Data"
          />
          <Box p="$4">
            <Text fontSize="$sm" mb="$2">
              {params.date}
            </Text>
            <Heading fontSize="$lg" mb="$4">
              {params.title}
            </Heading>
            <Text fontSize="$md" textAlign="left">
              {params.content}
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
