import { useState } from 'react'
import { Image, StyleSheet, Dimensions, View } from 'react-native'
import { Avatar, Card, Modal, Portal, Provider, Text } from 'react-native-paper'
import { AppTheme, useAppTheme } from '../../../../theme'



export interface GoogleFitSectionProps {
    title: string,
    subTitle: string,
    icon: string
}

const GoogleFitSection = ({
    title,
    subTitle,
    icon
}: GoogleFitSectionProps) => {
    const theme = useAppTheme()
    return (
        <Card.Title
            title={title}
            subtitle={subTitle}
            left={(props) => <Avatar.Icon style={styles(theme).cardIcon} {...props} icon={icon} />}
            style={styles(theme).cardStyle}
        />
    )
}

export default GoogleFitSection

const styles = (theme: AppTheme) =>
    StyleSheet.create({
        cardStyle: {
            backgroundColor: theme.colors.onTertiary,
            borderRadius: 10,
            padding: 20,
            elevation: 4,
            marginBottom: 5
        },
        cardIcon: {
            backgroundColor: theme.colors.primary
        }
    })
