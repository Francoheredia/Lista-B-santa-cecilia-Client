import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext';

export const Players = () => {
  const { players } = useContext(PlayerContext);

  return (
    <>
      <TableContainer display="block" w={{ sm: '90%', xl: '100%' }}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Appearances</Th>
              <Th>Wins</Th>
              <Th>Losses</Th>
              <Th>Winrate</Th>
              <Th>Badstreak</Th>
            </Tr>
          </Thead>
          <Tbody>
            {players ? (
              players?.map((player: any) => {
                return (
                  <Tr>
                    <Td>{player.name}</Td>
                    <Td>{player.appearances}</Td>
                    <Td>{player.wins}</Td>
                    <Td>{player.losses}</Td>
                    <Td>{player.winrate}</Td>
                    <Td>{player.badstreak}</Td>
                  </Tr>
                );
              })
            ) : (
              <Center position="absolute" left="50%" top="62%">
                <Spinner />
              </Center>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
