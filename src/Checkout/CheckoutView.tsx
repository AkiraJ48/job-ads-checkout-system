import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import Card from "../components/Card";
import { CheckoutViewProps } from "./Types";

function CheckoutView(props: CheckoutViewProps) {
  const { cart } = props;
  
  return (
    <Box marginTop="12px">
      <Card height="212px">
        <Box height="100%" display="grid">
          <Box>
            <Heading size="lg" as="h2" marginBottom="12px">
              Checkout
            </Heading>
            <Box marginBottom="12px">
              {
                cart.products.map(product => (
                  <Flex key={product.id} justifyContent={'space-between'}>
                    <Flex>
                      <Box marginRight="6px">
                        {product.name}
                      </Box>
                      <Box>
                        x{product.quantity}
                      </Box>
                    </Flex>
                    <Box>
                      {
                        product.discountedPrice ? (
                          <Flex>
                            <Text as="s">${product.price}</Text>
                            <Text marginLeft="8px" as="i">${product.discountedPrice}</Text>
                          </Flex>
                        ) : (
                          <Text as="i">${product.price}</Text>
                        )
                      }
                    </Box>
                  </Flex>
                ))
              }
            </Box>
          </Box>
          <Flex alignSelf={"flex-end"} justifyContent="space-between">
            <Text size="sm">
              Total Amount:
            </Text>
            <Box>
              ${cart.totalAmount}
            </Box>
          </Flex>
        </Box>
      </Card>
    </Box>
  )
}

export default CheckoutView;
