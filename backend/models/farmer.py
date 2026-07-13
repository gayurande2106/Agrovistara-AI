from sqlalchemy import Column, Integer, String
from database.database import Base

class Farmer(Base):
    __tablename__ = "farmers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    mobile = Column(String, nullable=False)
    village = Column(String, nullable=False)
    district = Column(String, nullable=False)
    crop = Column(String, nullable=False)