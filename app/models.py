from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime, ForeignKey
import datetime
from database import Base

# 사용자 테이블
class Client(Base):
    __tablename__ = "clients"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(String, unique=True, index=True)  # userid → client_id 변경
    username = Column(String)
    password = Column(String)
    gender = Column(String)
    age = Column(Integer)
    contact_number = Column(String)
    balance_encrypted = Column(Float)
    last_login = Column(DateTime, default=datetime.datetime.utcnow)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    is_active = Column(Boolean, default=True)

# 친구 관계 테이블
class ClientFriends(Base):
    __tablename__ = "client_friends"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    friend_id = Column(Integer, ForeignKey("clients.id"))
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

# 문의 테이블
class ClientInquiries(Base):
    __tablename__ = "client_inquiries"

    id = Column(Integer, primary_key=True, index=True)
    inquiry_title = Column(String)
    inquiry_content = Column(String)
    client_id = Column(Integer, ForeignKey("clients.id"))
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)
    is_answered = Column(Boolean, default=False)

# 퀘스트 테이블
class ClientQuests(Base):
    __tablename__ = "client_quests"

    id = Column(Integer, primary_key=True, index=True)
    quest_title = Column(String)
    quest_type = Column(String)
    quest_specifics = Column(String)
    quest_conditions = Column(String)
    quest_budget = Column(Float)
    quest_personnel = Column(Integer)
    quest_period = Column(String)
    client_id = Column(Integer, ForeignKey("clients.id"))
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)
    quest_status = Column(String)

# 퀘스트 이미지 테이블
class ClientQuestImages(Base):
    __tablename__ = "client_quest_images"

    id = Column(Integer, primary_key=True, index=True)
    quest_id = Column(Integer, ForeignKey("client_quests.id"))
    image_path = Column(String)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

# 퀘스트 조건 테이블
class ClientQuestConditions(Base):
    __tablename__ = "client_quest_conditions"

    id = Column(Integer, primary_key=True, index=True)
    quest_id = Column(Integer, ForeignKey("client_quests.id"))
    condition_type = Column(String)
    condition_value = Column(String)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

# 퀘스트 좋아요 테이블
class ClientLikedQuests(Base):
    __tablename__ = "client_liked_quests"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    quest_id = Column(Integer, ForeignKey("client_quests.id"))
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

# 미션 테이블
class ClientMissions(Base):
    __tablename__ = "client_missions"

    id = Column(Integer, primary_key=True, index=True)
    mission_title = Column(String)
    mission_price = Column(Float)
    mission_description = Column(String)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

# 트랜잭션 로그 테이블
class ClientTransactionLog(Base):
    __tablename__ = "client_transaction_log"

    transaction_id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    transaction_type = Column(String)
    amount_encrypted = Column(Float)
    balance_after = Column(Float)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    transaction_description = Column(String)
    transaction_status = Column(String)

# 프로필 업데이트 테이블
class ClientProfileUpdates(Base):
    __tablename__ = "client_profile_updates"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    updated_field = Column(String)
    old_value = Column(String)
    new_value = Column(String)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow)

# 비밀번호 변경 테이블
class ClientPasswordUpdates(Base):
    __tablename__ = "client_password_updates"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    old_password = Column(String)
    new_password = Column(String)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow)

# 연락처 변경 테이블
class ClientContactUpdates(Base):
    __tablename__ = "client_contact_updates"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    old_contact_number = Column(String)
    new_contact_number = Column(String)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow)

# 사용자 ID 변경 테이블
class ClientUserIdUpdates(Base):
    __tablename__ = "client_userid_updates"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    old_userid = Column(String)
    new_userid = Column(String)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow)

# 사용자 이름 변경 테이블
class ClientUsernameUpdates(Base):
    __tablename__ = "client_username_updates"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"))
    old_username = Column(String)
    new_username = Column(String)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow)
