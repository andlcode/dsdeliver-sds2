import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import Header  from '../header';
import OrderCard from '../../components/OrderCard';

function Orders() {

    return (
        <>
        <Header />
            <ScrollView style={styles.container}>
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container:  {
        paddingRight: '5%',
        paddingLeft: '5%'
    }

})
export default Orders;