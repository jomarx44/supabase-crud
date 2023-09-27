import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button, InputText, Label } from '../../components';
import {
  addTaskAction,
  deleteTaskAction,
  fetchTaskAction,
  logoutAction,
  updateTaskAction,
} from '../../services/action';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    isLogin,
    user,
    task,
    isTaskFetching,
    isTaskAdded,
    isTaskUpdated,
    isTaskDeleted,
    isTaskFetchingError,
    isTaskAddedError,
    isTaskUpdatedError,
    isTaskDeletedError,
  } = useSelector((state) => state.AppReducer);
  const [isTextInput, setTextInput] = useState('');
  const [isUpdate, setUpdate] = useState(false);
  const [isSelectedID, setSelectedID] = useState('');
  const [isLoading, setLoading] = useState(false);

  const fetchTask = () => {
    dispatch(fetchTaskAction(user?.username));
  };
  const handleResponse = (msg) => {
    setLoading(false);
    alert(msg);
    setTextInput('');
    fetchTask();
  };
  useEffect(() => {
    if (isLogin) {
      fetchTask();
    }
  }, []);

  useEffect(() => {
    if (isTaskAdded && !isTaskAddedError && isLoading) {
      handleResponse('Successfully Added!');
    } else if (isTaskUpdated && !isTaskUpdatedError && isLoading) {
      handleResponse('Successfully Updated!');
    } else if (isTaskDeleted && !isTaskDeletedError && isLoading) {
      handleResponse('Successfully Deleted!');
    } else if (
      (isTaskAddedError || isTaskUpdatedError || isTaskDeletedError) &&
      (!isTaskAdded || isTaskUpdated || isTaskDeleted) &&
      isLoading
    ) {
      handleResponse('Something went wrong!');
    }
  }, [
    task,
    isTaskAdded,
    isLoading,
    isTaskUpdated,
    isTaskDeleted,
    isTaskUpdatedError,
    isTaskAddedError,
    isTaskDeletedError,
    isTaskFetchingError,
  ]);

  const handleUpdate = (item) => {
    setTextInput(item?.task);
    setSelectedID(item?.id);
    setUpdate(true);
  };
  const handleAddUpdate = () => {
    if (isUpdate) {
      const params = {
        task: isTextInput,
        id: isSelectedID,
      };
      dispatch(updateTaskAction(params));
      setLoading(true);
      setUpdate(false);
      setTextInput('');
    } else {
      if (!isTextInput) {
        alert('Please fill !');
      } else {
        const params = {
          task: isTextInput,
          username: user?.username,
        };
        dispatch(addTaskAction(params));
        setLoading(true);
      }
    }
  };
  const handleDelete = (item) => {
    Alert.alert(
      'Hello',
      'Are you sure want to delete this ?',
      [
        {
          text: 'Yes',
          onPress: () => {
            dispatch(deleteTaskAction(item.id));
            setLoading(true);
          },
        },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };
  const handleLogout = () => {
    Alert.alert(
      'Hello',
      'Are you sure want to logout? ?',
      [
        {
          text: 'Yes',
          onPress: () => {
            dispatch(logoutAction());
            navigation.replace('Auth');
          },
        },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };
  console.log('render');
  return (
    <SafeAreaView>
      {isLoading ? (
        <View
          style={{
            height: '95%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={20} />
          <Label text="Loading ..." />
        </View>
      ) : (
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Label text="TODO LIST !!" style={styles.label} textStyles={styles.labelText} />
            <Button text="↪" onPress={() => handleLogout()} textStyles={styles.buttonText} />
          </View>

          <View style={{ marginTop: 50, flexDirection: 'row', justifyContent: 'center' }}>
            <InputText
              onChange={(txt) => {
                setTextInput(txt);
              }}
              value={isTextInput}
              placeholder="Task name               "
            />
            <Button
              onPress={() => {
                handleAddUpdate();
              }}
              text={isUpdate ? 'Update' : '➕'}
              buttonStyle={{ backgroundColor: '#1AA7EC', marginLeft: 10 }}
              // textStyles={styles.buttonText}
            />
          </View>
          <View
            style={{
              height: '70%',
              marginTop: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#bbafaf',
            }}>
            <FlatList
              style={{ width: '100%' }}
              data={task}
              keyExtractor={(item, id) => item?.id + id}
              ListEmptyComponent={() => {
                return <Label text="No record!" />;
              }}
              ListHeaderComponent={() => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#1AA7EC',
                      justifyContent: 'space-evenly',
                    }}>
                    <Label text="Name" />
                    <Label text="Status" />
                    <Label text="Actions" />
                  </View>
                );
              }}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      backgroundColor: '#b2b6e7',
                    }}>
                    <Text style={{ width: '30%', textAlign: 'center' }}>{item?.task}</Text>
                    <Text style={{ width: '30%', textAlign: 'center' }}>
                      {item?.is_complete ? 'Done' : 'Pending'}
                    </Text>
                    <View
                      style={{
                        width: '30%',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                      }}>
                      <Button
                        textStyles={{ fontSize: 15 }}
                        text="✏️"
                        onPress={() => handleUpdate(item)}
                      />
                      <Button
                        textStyles={{ fontSize: 10 }}
                        text="❌"
                        onPress={() => handleDelete(item)}
                      />
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: { backgroundColor: 'red' },
  label: { alignItems: 'flex-start' },
  labelText: { fontSize: 30, fontWeight: '800' },
  buttonText: {
    fontSize: 20,
  },
  button: { backgroundColor: '#1AA7EC' },
});

export default Home;
