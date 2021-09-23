import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormControl,
  Input,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";

export default function Form() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const fieldsValues = watch();

  return (
    <VStack
      h="453px"
      w="400px"
      p="34px"
      border="2px"
      bgColor="white"
      borderRadius="32px"
      justify="space-between"
    >
      <VStack w="full">
        <FormControl isInvalid={errors.name}>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "This is required",
            })}
            bgColor="#F2F2F2"
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.age}>
          <Input
            id="age"
            type="number"
            placeholder="age"
            {...register("age", {
              required: "This is required",
            })}
            bgColor="#F2F2F2"
          />
          <FormErrorMessage>
            {errors.age && errors.age.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <Input
            id="email"
            type="email"
            placeholder="email"
            {...register("email", {
              required: "This is required",
            })}
            bgColor="#F2F2F2"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
      </VStack>
      <VStack w="full" h="30%" spacing="10px">
        <HStack w="full" justify="space-between">
          <Text as="i">Name</Text>
          <Text as="strong">{fieldsValues.name}</Text>
        </HStack>
        <HStack w="full" justify="space-between">
          <Text as="i">Age</Text>
          <Text as="strong">{fieldsValues.age}</Text>
        </HStack>
        <HStack w="full" justify="space-between">
          <Text as="i">Email</Text>
          <Text as="strong">{fieldsValues.email}</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
