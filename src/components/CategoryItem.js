import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import PlantAPI from '../apis/plantAPI copy';
import {useNavigation} from '@react-navigation/native';

const CategoryItem = props => {
  const {catId} = props;
  const [categoryDetail, setCategoryDetail] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    getCategoryById();
  }, [catId]);

  const getCategoryById = async () => {
    const api = `/category?id=${catId}`;

    try {
      const res = await PlantAPI.HandleData(api);

      setCategoryDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return categoryDetail ? (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CategoyDetail', {item: categoryDetail})
      }
      style={{
        backgroundColor: 'green',
        borderRadius: 5,
        padding: 8,
        marginRight: 12,
        fontSize: 17,
      }}>
      <Text style={{color: 'white'}}>{categoryDetail.name}</Text>
    </TouchableOpacity>
  ) : (
    <></>
  );
};

export default CategoryItem;
