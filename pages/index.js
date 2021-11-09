import Layout from './components/Layout'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, lastName, fat, carbs, protein) {
  return { name, lastName, fat, carbs, protein };
}

const rows = [
  createData('Juan', 'Manuel Fangio', 6.0, 8.0, 4.0),
  createData('Ayrton', 'Senna', 9.0, 8.2, 4.3),
  createData('Alain', 'Prost', 8.5, 9.0, 6.0),
  createData('Michael', 'Schumacher', 9.7, 6.7, 4.3),
  createData('Lewis', 'Hamilton', 10.0, 7.9, 3.9),
];

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <b>MY STUDENTS SCORES</b>!
        </h1>
        <hr />
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">LastName</TableCell>
                <TableCell align="left">Last Grade</TableCell>
                <TableCell align="left">Current Grade</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.lastName}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="left">
                    <Button variant="contained">EDIT GRADE</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <hr />
        <Button variant="contained">ADD A STUDENT</Button>
      </main>
    </Layout>
  )
}
