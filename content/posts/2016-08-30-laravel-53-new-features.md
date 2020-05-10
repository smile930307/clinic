---
title: 'ما الجديد في نسخة لارافيل 5.3 Laravel ؟'
date: '2016-08-30'
slug: 'web-development/laravel-53-new-features'
template: 'post'
categories:
  - PHP
  - برمجة
  - متميز
tags:
  - laravel
  - إطار العمل
thumbnail: '../thumbnails/laravel.png'
---

منذ مدة قصيرة تم الإعلان عن نسخة جديدة من **لارافيل** 5 حملت الرقم 5.3، جاءت بعدد من التغييرات والميزات الجديدة التي رامت كغيرها من النسخ إلى تسهيل حياة المطور وجعل العمل بإطار العمل لارافيل أكثر متعة.

هذه التغييرات لم تكن تغييرات عميقة جدا بالشكل الذي رأيناه مثلا في نسخة لارافيل 5.2، ولكنها مع ذلك تستحق أن نفرد لها مقالا خاصا لنكتشفها جميعا ونكون على علم بها :

## حذف وإضافة مجلدات وملفات جديدة

في السابق، عند تنصيب لارافيل، كانت بعض المجلدات تأتي افتراضيا مع إطار العمل رغم أنها فارغة أو قد تحتوي على كلاسات لا يستعملها المطور إلا عند الحاجة. هذه المجلدات هي :

- Events
- Listeners
- Policies

وهي كلها توجد داخل المجلد **app**.

هذه المجلدات حذفت افتراضيا فقط أي أنها ستظهر مرة أخرى عند الحاجة، مثلا عندما نقوم بتوليد (generate) حدث ما سيتم إنشاء المجلد **Events** وبداخله كلاس الحدث الذي أنشأناه وهكذا نفس الشيء بالنسبة للمجلدين الآخرين.

تغيير آخر مهم حصل على مستوى بنية المجلدات هو اختفاء الملف **routes.php** الذي كان متواجدا داخل المجلد **Http** وتم تعويضة بمجلد جديد اسمه **routes** في جذر (root) المشروع كما ستلاحظون في الصورة أسفله ويحتوي على ملفين web.php و api.php وهنا سيقوم المطور بإضافة مسارات التطبيق (routing) عوض إضافتهم في ملف  *routes.php* كما كنا نفعل سابقا.

[![بنية المجلدات في إطار العمل لارافيل](../images/laravel-53-directory-structure.jpg)](../images/laravel-53-directory-structure.jpg)

## اسعمال المتغير $loop في قوالب Blade

نقوم باستعمال هذا المتغير داخل حلقات في ملفات قوالب Blade ويضم عددا من الخاصيات العملية.

<ul>
    @foreach ($users as $user)

        @if ($loop->count)
            @if ($loop->first)
                <li class="list-item first">{{ $user->name }}</li>
            @elseif ($loop->last)
                <li class="list-item last">{{ $user->name }}</li>
            @else
                <li class="list-item">{{ $user->name }}</li>
            @endif
        @endif

    @endforeach

</ul>

كما تلاحظون في الشيفرة أعلاه، نستطيع التقاط آخر عنصر في الحلقة بفضل الخاصية _$loop_ دون اللجوء للطريقة التقليدية التي نعتمد فيها على إنشاء متغير جديد _$i_ ثم زيادة ومقارنة قيمته داخل الحلقة للقيام ببعض الوظائف كإضافة كلاسات first و last لأول وآخر عنصر كما في المثال.

## باني الإستعلام (Query Builder) يقوم بإرجاع Collections

سابقا كان باني الإستعلام يقوم بإرجاع النتائج على شكل مصفوفة (Array)، أما الآن مع لارافيل 5.3 فعملية الإرجاع تتم أيضا على شكل **Collection** مع كامل نقاط قوة هذه الأخيرة.

$result = DB::table('users')->get();

if ($result->first()) { } 
if (!$result->isEmpty()) { }
if ($result->count()) { }
if (count($result)) { }
if ($result->first(function($user){return $user->email == 'user@example.com'})) { }

هذه الميزة كانت متضمنة سلفا في نظام Eloquent ORM ولكن الآن فقط أصبحت ممكنة مع **باني الإستعلام  Query Builder **كذلك.

## الرجوع إلى مرحلة سابقة من التهجير Migrations Rollback

سابقا كان بالإمكان فقط التراجع عن آخر تهجير قمت به لقاعدة البيانات (Migration) أو التراجع عن جميع التهجيرات التي قمت بها في مشروعك، لكن الآن مع **لارافيل 5.3** أصبح بإمكانك التراجع إلى نقطة معينة محددة قد تكون التهجير ما قبل الآخير أو الثاني إلخ...وذلك عن طريق المعامل (parameter) الجديد **step** كما في المثال :

php artisan migrate:rollback --step=1

## تخصيص نظام تعدد الصفحات Paginator

أصبح بإمكاننا الآن تخصيص نظام تعدد الصفحات انطلاقا من قوالب Blade وهو ما لم يكن متاحا من قبل.

<blockquote class="twitter-tweet" data-lang="fr"><p dir="ltr" lang="en">Today in Laravel 5.3 development. Bringing back simple pagination customization via views. 👼<a href="https://t.co/Ir28svVGCA">pic.twitter.com/Ir28svVGCA</a></p>— Taylor Otwell (@taylorotwell) <a href="https://twitter.com/taylorotwell/status/738051768072867840">1 juin 2016</a></blockquote> 

## لارافيل إيكو Laravel Echo

لارافيل إيكو هو نظام لنشر الأحداث **Events Broadcasting **بالإعتماد على [Websockets](http://www.tutomena.com/blog/difference-between-websockets-and-restapi/) و [واجهة Pusher،](http://www.tutomena.com/web-development/realtime-apps-using-pusher-api/) وجاء لتحسين النظام القديم لنشر الأحداث في لارافيل، لم تتسنى لي الفرصة بعد لتجربة هذا النظام ولكن من الواضح أنه سيكون نقطة قوة أخرى في إطار العمل لارافيل بالنظر إلى عدد من المقالات التي كتبت حول هذا الموضوع وهو لا يزال في أيامه الأولى. يمكنكم مشاهدة [هذا الفيديو](https://laracasts.com/lessons/introducing-laravel-echo) التعليمي لتايلور أوتويل (مؤسس لارافيل) يشرح فيه نظام **لارافيل إيكو** وطريقة عمله.

## Mailables : نظام جديد لإرسال الإيميلات

هذا النظام الجديد رائع للغاية وينظم بشكل كبير عملية إرسال الإيميلات، عن طريق كلاسات ( تسمى **Mailables** ) تتم فيها كافة الإعدادات المتعلقة بالإيميل من العنوان والرسالة والقالب إلخ...

يمكنكم اكتشاف المزيد حول هذا الموضوع عبر [هذاالمقال الذي أعددناه وشرحنا فيه موضوع Mailables بشكل مفصل.](https://www.tutomena.com/web-development/php/sending-emails-laravel/)

## خاتمة

هناك ميزات أخرى تمت إضافتها لنسخة **لارافيل** 5.3 ولكن التي ذكرناها هي ربما أبرزها. ومحبي الإستطلاع وتعلم كل جديد أحيلهم على هذه السلسلة من الفيديوهات من موقع [laracasts.com](https://laracasts.com/series/whats-new-in-laravel-5-3/) لإكتشاف باقي الميزات بالصوت والصورة من إنجاز الأسطورة **جيفري واي** :)

<script src="//platform.twitter.com/widgets.js" async charset="utf-8"></script>
