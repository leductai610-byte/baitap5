import React, { useState } from 'react'; // 1. Import useState
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  StatusBar
} from 'react-native';

const ColorButton = ({ title, backgroundColor, textColor, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: backgroundColor }]}
      // Khi bấm, gửi cả MÃ MÀU (để đổi nền) và TÊN MÀU (để hiện thông báo) về cho cha
      onPress={() => onPress(backgroundColor, title)}
    >
      <Text style={[styles.text, { color: textColor || 'white' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// --- COMPONENT CHA ---
export default function App() {
  
  // 2. Khai báo State để lưu màu nền hiện tại
  // bgColor: Biến chứa màu
  // setBgColor: Hàm để thay đổi giá trị biến đó
  const [bgColor, setBgColor] = useState('#f5f5f5'); 

  // Hàm xử lý khi bấm nút
  const handleButtonPress = (colorHex, colorName) => {
    // Thay đổi màu nền ngay lập tức
    setBgColor(colorHex);
    
    Alert.alert("Thông báo", `Bạn đã chọn màu: ${colorName}`);
  };

  return (
    // 3. Gán giá trị State vào style backgroundColor của màn hình
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.content}>
        <ColorButton 
          title="GREEN" 
          backgroundColor="#4CAF50" 
          onPress={handleButtonPress} 
        />
        <ColorButton 
          title="BLUE" 
          backgroundColor="#2196F3" 
          onPress={handleButtonPress} 
        />
        <ColorButton 
          title="BROWN" 
          backgroundColor="#795548" 
          onPress={handleButtonPress} 
        />
        <ColorButton 
          title="YELLOW" 
          backgroundColor="#FFEB3B" 
          textColor="black"
          onPress={handleButtonPress} 
        />
        <ColorButton 
          title="RED" 
          backgroundColor="#F44336" 
          onPress={handleButtonPress} 
        />
        <ColorButton 
          title="BLACK" 
          backgroundColor="#000000" 
          onPress={handleButtonPress} 
        />
        
        {/* Nút Reset để quay về màu mặc định */}
        <ColorButton 
          title="RESET MÀU" 
          backgroundColor="#9E9E9E" 
          onPress={handleButtonPress} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
transition: '0.5s', // (Mẹo nhỏ: Expo Web sẽ có hiệu ứng chuyển màu mượt mà)
  },
  content: {
    width: '100%',
    // Thêm nền trắng mờ cho cụm nút để dễ nhìn khi nền tối
    backgroundColor: 'rgba(255,255,255,0.2)', 
    padding: 20,
    borderRadius: 15,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});