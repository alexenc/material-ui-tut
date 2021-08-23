import { Card, IconButton, Typography } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { DeleteOutlined } from "@material-ui/icons";


export default function NoteCard({note, handleDelete}) {
    return (
        <div>
            <Card elevation={1}>
                <CardHeader 
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" >
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
