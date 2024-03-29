"""Make Foreign Keys not NULL

Revision ID: 2d62fe6b4ef5
Revises: 6cf13a25b716
Create Date: 2016-08-27 17:21:29.131375

"""

# revision identifiers, used by Alembic.
revision = '2d62fe6b4ef5'
down_revision = '6cf13a25b716'

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('checks', 'time_id',
               existing_type=mysql.INTEGER(display_width=11),
               nullable=False)
    op.alter_column('checks', 'user_id',
               existing_type=mysql.INTEGER(display_width=11),
               nullable=False)
    op.alter_column('events', 'user_id',
               existing_type=mysql.INTEGER(display_width=11),
               nullable=False)
    op.alter_column('times', 'event_id',
               existing_type=mysql.INTEGER(display_width=11),
               nullable=False)
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('times', 'event_id',
               existing_type=mysql.INTEGER(display_width=11),
               nullable=True)
    op.alter_column('events', 'user_id',
               existing_type=mysql.INTEGER(display_width=11),
               nullable=True)
    op.alter_column('checks', 'user_id',
               existing_type=mysql.INTEGER(display_width=11),
               nullable=True)
    op.alter_column('checks', 'time_id',
               existing_type=mysql.INTEGER(display_width=11),
               nullable=True)
    ### end Alembic commands ###
