import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Alert, Text, ActivityIndicator } from 'react-native';
import Header  from '../header';
import OrderCard from '../../components/OrderCard';
import { fetchOrders } from '../../api'
import { Order } from '../../type'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused, useNavigation } from '@react-navigation/native';
 

function Orders() {
    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', {
            order
        });
    }
    const [orders, setOrders] = useState<Order[]>([])
    const navigation = useNavigation();
    const [IsLoading, setIsLoading ] = useState(false);
    const isFocused = useIsFocused();
    
    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
        .then(response => setOrders(response.data))
        .catch(() => Alert.alert('Houve um erro ao buscar os pedidos'))
        .finally(() => setIsLoading(false));
    }
    useEffect(() => {
            if (isFocused ) {
                fetchData();
            }
    }, [isFocused]);

    
    const Loading = () => (
        <View style={styles.loading}>
          <ActivityIndicator color="#DA5C5C" size="large" />
          <Text style={styles.loadingText}>Atualizando Pedidos</Text>
        </View>
      );

    return (
        <>
        <Header />
            <ScrollView style={styles.container}>
                { IsLoading ? (
                    <Loading />
                ) :  (
                    orders.map(order => (
                        <TouchableWithoutFeedback key={order.id} onPress={() => handleOnPress(order)}>
                           <OrderCard order={order} /> 
                        </TouchableWithoutFeedback>
                    ))
                )}
                
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container:  {
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    loading: {
        alignItems: "center",
        marginTop: 50,
      },
      loadingText: {
        fontFamily: "OpenSans_400Regular",
        fontSize: 15,
        marginTop: 10,
      },

})
export default Orders;