import React from 'react'
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { COLORS, SPACING } from '../styles/GlobalStyles'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const getResponsiveFontSize = (baseSize: number) => {
  const scale = screenWidth / 375
  const newSize = baseSize * scale
  
  if (newSize < baseSize * 0.8) return baseSize * 0.8
  if (newSize > baseSize * 1.2) return baseSize * 1.2
  return newSize
}

const E8 = () => {
  const articleData = {
    coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&q=80',
    title: 'React Native: Xây dựng ứng dụng di động đa nền tảng',
    author: {
      name: 'Sơn Nguyễn',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      publishDate: 'Đăng ngày: 07/09/2025'
    },
    content: `React Native đã cách mạng hóa lĩnh vực phát triển ứng dụng di động bằng cách cho phép các nhà phát triển xây dựng các ứng dụng gốc cho cả iOS và Android từ một cơ sở mã duy nhất. Được phát triển bởi Facebook, framework này sử dụng thư viện React, một trong những thư viện JavaScript phổ biến nhất để xây dựng giao diện người dùng.

Ưu điểm lớn nhất của React Native là hiệu quả trong việc phát triển. Thay vì phải viết code riêng biệt cho iOS (Swift/Objective-C) và Android (Java/Kotlin), các developer có thể sử dụng JavaScript và React để tạo ra những ứng dụng có hiệu suất gần như native.

Framework này cung cấp một bộ component phong phú, từ các thành phần UI cơ bản như View, Text, Image đến những component phức tạp hơn như FlatList, ScrollView. Điều này giúp việc xây dựng giao diện trở nên nhanh chóng và hiệu quả.

Một trong những tính năng nổi bật của React Native là Hot Reload, cho phép developer xem ngay lập tức những thay đổi trong code mà không cần rebuild toàn bộ ứng dụng. Điều này giúp tăng đáng kể tốc độ phát triển và debug.

Nhiều công ty lớn đã tin tưởng và sử dụng React Native cho các sản phẩm của họ, bao gồm Facebook, Instagram, Airbnb, Tesla, và Walmart. Điều này chứng tỏ độ tin cậy và khả năng mở rộng của framework.`
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Bài 8: Màn hình đọc báo</Text>
      
      <View style={styles.articleCard}>
      <View style={styles.coverImageContainer}>
        {articleData.coverImage ? (
          <Image source={{ uri: articleData.coverImage }} style={styles.coverImage} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.placeholderText}>Ảnh bìa</Text>
          </View>
        )}
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{articleData.title}</Text>
        <View style={styles.authorContainer}>
          <View style={styles.authorInfo}>
            {articleData.author.avatar ? (
              <Image source={{ uri: articleData.author.avatar }} style={styles.authorAvatar} />
            ) : (
              <View style={styles.placeholderAvatar}>
                <Text style={styles.avatarText}>{articleData.author.name.charAt(0)}</Text>
              </View>
            )}
            <View style={styles.authorDetails}>
              <Text style={styles.authorName}>{articleData.author.name}</Text>
              <Text style={styles.publishDate}>{articleData.author.publishDate}</Text>
            </View>
          </View>
        </View>

        <View style={styles.articleContainer}>
          <Text style={styles.articleContent}>{articleData.content}</Text>
        </View>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.lg,
  },
  sectionTitle: {
    fontSize: getResponsiveFontSize(20),
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.xs,
  },
  articleCard: {
    backgroundColor: COLORS.background,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  coverImageContainer: {
    width: '100%',
    height: screenHeight * 0.2,
    backgroundColor: COLORS.backgroundSecondary,
  },
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  placeholderText: {
    fontSize: getResponsiveFontSize(16),
    color: COLORS.textSecondary,
    fontFamily: Platform.select({
      ios: 'Georgia',
      android: 'serif',
      default: 'serif'
    }),
  },
  contentContainer: {
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  title: {
    fontSize: getResponsiveFontSize(28),
    fontWeight: '700',
    color: COLORS.text,
    lineHeight: getResponsiveFontSize(36),
    marginBottom: SPACING.lg,
    fontFamily: Platform.select({
      ios: 'Georgia-Bold',
      android: 'serif',
      default: 'serif'
    }),
  },
  authorContainer: {
    marginBottom: SPACING.lg,
    paddingBottom: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: SPACING.sm,
  },
  placeholderAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  avatarText: {
    fontSize: getResponsiveFontSize(18),
    fontWeight: '600',
    color: COLORS.textWhite,
    fontFamily: Platform.select({
      ios: 'San Francisco',
      android: 'sans-serif',
      default: 'sans-serif'
    }),
  },
  authorDetails: {
    flex: 1,
  },
  authorName: {
    fontSize: getResponsiveFontSize(16),
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 2,
    fontFamily: Platform.select({
      ios: 'San Francisco-Semibold',
      android: 'sans-serif-medium',
      default: 'sans-serif'
    }),
  },
  publishDate: {
    fontSize: getResponsiveFontSize(14),
    color: COLORS.textSecondary,
    fontFamily: Platform.select({
      ios: 'San Francisco',
      android: 'sans-serif',
      default: 'sans-serif'
    }),
  },
  articleContainer: {
    marginTop: SPACING.sm,
  },
  articleContent: {
    fontSize: getResponsiveFontSize(17),
    lineHeight: getResponsiveFontSize(26),
    color: COLORS.text,
    textAlign: 'justify',
    fontFamily: Platform.select({
      ios: 'Charter', // Font dễ đọc trên iOS
      android: 'serif',
      default: 'serif'
    }),
    letterSpacing: 0.3,
  },
})

export default E8