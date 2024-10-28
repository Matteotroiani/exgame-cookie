import Table from '@mui/joy/Table';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';



export const Exams: React.FC = () => {
  return (
        <Table aria-label="basic table">
          <thead>
            <tr>
              <th style={{ width: '40%' }}>Esame</th>
              <th>Classe</th>
              <th>Modifica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JavaScript</td>
              <td>159</td>
              <td><Stack direction="row" spacing={1}>
                <Button>Modifica</Button>
                <Button>Elimina</Button>
            </Stack></td>
            </tr>
            <tr>
              <td>HTML e CSS</td>
              <td>237</td>
              <td><Stack direction="row" spacing={1}>
                <Button>Modifica</Button>
                <Button>Elimina</Button>
            </Stack></td>
            </tr>
            <tr>
              <td>React</td>
              <td>356</td>
              <td><Stack direction="row" spacing={1}>
                <Button>Modifica</Button>
                <Button>Elimina</Button>
            </Stack></td>
            </tr>
          </tbody>
        </Table>
      );
    }
