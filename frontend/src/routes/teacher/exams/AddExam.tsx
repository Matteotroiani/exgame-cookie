import { Button } from "@mui/joy";
import { useNavigate } from "react-router";
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import Sheet from '@mui/joy/Sheet';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';




export const AddExam: React.FC = () => {
  const navigate=useNavigate()
  return (
    <div>
    <Button onClick={()=>navigate('/')}>Vai agli esami</Button>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      width: 300,
      '& > div': { p: 2, borderRadius: 'md', display: 'flex' },
    }}>
            <tr>
              <th style={{ width: '60%' }}><b>Nome esame</b></th>
            </tr>
            <tr>
            <th>Nome domanda 1
            <Sheet variant="outlined">
              <Checkbox overlay label="Risposta 1" />
              </Sheet>
              <Sheet variant="outlined">
              <Checkbox
                  label="Risposta 2"
                  overlay
                />
            </Sheet>
            </th>
            </tr>
    </Box>
    <FormControl>
      <FormLabel>Domanda 2 radio</FormLabel>
      <RadioGroup defaultValue="nan" name="radio-buttons-group">
        <Radio
          value="prova1"
          label="Prova 1"
        />
        <Radio value="prova2" label="Prova 2" />
        <Radio value="prova3" label="Prova 3" />
        <Radio value="prova3" label="Ripetizione 3" />
      </RadioGroup>
    </FormControl>
    </div>
  );
};
