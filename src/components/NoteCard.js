import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { red, blue, yellow, pink } from '@material-ui/core/colors';

// Info pulled from data/db.json and Form Categories in Create.js
const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if (note.category == 'family') {
                return red[700]
            }
            if (note.category == 'business') {
                return blue[500]
            }
            if (note.category == 'vacation') {
                return yellow[500]
            }
            return pink[500]
        }
    }
})

export default function NoteCard({ note, handleDelete }) {
const classes = useStyles(note)

    return (
        <div>
            <Card elevation={3}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardMedia
                    className={classes.media}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}